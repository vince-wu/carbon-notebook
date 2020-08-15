from pathlib import Path
from re import search, escape
from api import models


def getFigures(id):
    formula = models.Sample.query.filter_by(id=id).first().formula
    alias = id.replace(id.split('-')[0], formula)
    print(alias)
    baseDir = '/images/'
    d = Path(__file__).resolve().parents[2]
    refinementDir = d / 'public' / 'images' / 'refinements'
    electrochemDir = d / 'public' / 'images' / 'electrochem'

    refinements = [x.name for x in refinementDir.glob('**/*')]
    electrochem = [x.name for x in electrochemDir.glob('**/*')]
    
    refinementsList = [baseDir + 'refinements/' + name for name in refinements if id in name or alias in name]
    electrochemList = [baseDir + 'electrochem/' + name for name in electrochem if id in name or alias in name]
    return refinementsList + electrochemList

# getFigures('MnMn-B06-S02')