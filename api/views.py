from flask import Blueprint, jsonify, request, render_template
from . import db
from .models import Sample, DataLink
from .backend.getFigures import getFigures  

main = Blueprint('main', __name__)


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
    Sample.query.filter_by(id=sample_data['id']).update(sample_data)
    db.session.commit()
    return 'Done', 201

@main.route('/api/delete_sample', methods=['POST'])
def delete_sample():
    id = request.get_json()
    id = id.replace('%20', ' ')
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

@main.route('/api/add_link')
def add_link():
    link_data = request.get_json()
    new_link = DataLink(
        directoryPath=link_data['dirPath'], 
        scriptPath=link_data['scriptPath'], 
        dataType=link_data['dataType'],
        title=link_data['title'],
        description=link_data['description']
    )
    db.session.add(new_link)
    db.session.commit()
    return 'Done', 201

@main.route('/api/edit_link')
def edit_link():
    link_data = request.get_json()
    DataLink.query.filter_by(title=link_data['title']).update(link_data)
    db.session.commit()
    return 'Done', 201

@main.route('/api/remove_link')
def remove_link():
    title = request.get_json()
    title = title.replace('%20', ' ')
    Sample.query.filter_by(title=title).delete()
    db.session.commit()
    return 'Done', 201

