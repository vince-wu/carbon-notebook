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

class Sample(db.Model):
    id = db.Column(db.String(50), primary_key=True)
    formula = db.Column(db.String(50))
    description = db.Column(db.String())
    starred = db.Column(db.Boolean)
    project = db.Column(db.String())

class DataLink(db.Model):
    directoryPath = db.Column(db.String())
    scriptPath = db.Column(db.String())
    dataType = db.Column(db.String())
    title = db.Column(db.String(), primary_key=True)
    description = db.Column(db.String())