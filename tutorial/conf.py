from datetime import datetime

extensions = [
    "sphinx_multitoc_numbering",
    "myst_parser"
]
templates_path = ["_templates"]
source_suffix = ".md"
master_doc = "index"

project = 'First Visual Story'
year = datetime.now().year
copyright = f'{year} palewire'

exclude_patterns = ["_build"]

html_theme = "palewire"
html_sidebars = {
    '**': [
        'about.html',
        'navigation.html',
    ]
}
html_theme_options = {
    "canonical_url": f"https://palewi.re/docs/first-visual-story/",
}
html_static_path = ['_static']

pygments_style = 'sphinx'