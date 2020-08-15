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
