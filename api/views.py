from flask import Blueprint, jsonify, request, render_template
from . import db
from .models import Sample
from .backend.getFigures import getFigures
import time

main = Blueprint('main', __name__)

@main.route('/time')
def get_current_time():
    return {'time': time.time()}

@main.route('/api/add_sample', methods=['POST'])
def add_sample():
    sample_data = request.get_json()
    new_sample = Sample(
        id=sample_data['id'], 
        formula=sample_data['formula'], 
        description=sample_data['description'],
        starred=sample_data['starred']
    )
    db.session.add(new_sample)
    db.session.commit()
    return 'Done', 201

@main.route('/api/edit_sample', methods=['POST'])
def edit_sample():
    sample_data = request.get_json()
    edited_sample = {
        'id' :sample_data['id'], 
        'formula': sample_data['formula'], 
        'description': sample_data['description'],
        'starred': sample_data['starred']
    }
    Sample.query.filter_by(id=sample_data['id']).update(edited_sample)
    db.session.commit()
    return 'Done', 201

@main.route('/api/delete_sample', methods=['POST'])
def delete_sample():
    id = request.get_json()
    id = id.replace('%20', ' ')
    print("id", id)
    Sample.query.filter_by(id=id).delete()
    db.session.commit()
    return 'Done', 201


@main.route('/api/samples')
def samples():
    sample_list = Sample.query.all()
    samples = []
    for sample in sample_list:
        samples.append({
            'id' : sample.id ,
            'formula': sample.formula, 
            'description': sample.description,
            'starred': sample.starred
        })
    return {'samples' : samples}

@main.route('/api/sample/<id>')
def sampleReport(id):
    id = id.replace('%20', ' ')
    row = Sample.query.filter_by(id=id).first()
    sample = dict((col, getattr(row, col)) for col in row.__table__.columns.keys())
    print(sample)
    return {'sample': sample}

@main.route('/api/figures/<id>')
def sampleFigures(id):
    id = id.replace('%20', ' ')
    figures = getFigures(id)
    return {'figures': figures}

@main.route('/api/sample_exists/<id>')
def sampleExists(id):
    id = id.replace('%20', ' ')
    exists = Sample.query.filter_by(id=id).first() is not None

    print('does this sample exist? ', exists)
    return {'exists': exists}