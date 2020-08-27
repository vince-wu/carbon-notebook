# To migrate the database, first navigate into the api/ directory, then run:
# >>> flask db migrate -m "message"
# This generates a migration script. To apply changes, next execute:
# >>> flask db upgrade

from . import db
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

class Movie(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(50))
    rating = db.Column(db.Integer)

class Samples(db.Model):
    __tablename__ = 'samples'
    id = db.Column(db.String(), primary_key=True)
    formula = db.Column(db.String(50))
    description = db.Column(db.String())
    starred = db.Column(db.Boolean)
    project = db.Column(db.String())

    script_params = db.relationship('ScriptParams', backref='sample', lazy='dynamic')

class DataLinks(db.Model):
    __tablename__ = 'data_links'
    directoryPath = db.Column(db.String())
    scriptPath = db.Column(db.String())
    dataType = db.Column(db.String())
    name = db.Column(db.String(), primary_key=True)
    description = db.Column(db.String())

class ScriptParams(db.Model):
    __tablename__ = 'script_params'
    id = db.Column(db.Integer, primary_key=True)
    sample_id = db.Column(db.String(), db.ForeignKey('samples.id'))
    paramName = db.Column(db.String())
    value = db.Column(db.String())
    valueType = db.Column(db.String())