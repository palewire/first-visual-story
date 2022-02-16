from datetime import datetime

extensions = [
    "sphinx_multitoc_numbering",
    "myst_parser"
]
templates_path = ["_templates"]
source_suffix = ".rst"
master_doc = "index"

project = 'First Visual Story'
year = datetime.now().year
copyright = f'{year}'

exclude_patterns = ["_build"]

html_theme = "alabaster"
html_sidebars = {
    '**': [
        'about.html',
        'navigation.html',
        'relations.html',
        'searchbox.html',
        'donate.html',
    ]
}
html_theme_options = {
    "canonical_url": f"https://palewi.re/docs/{project}/",
    "show_powered_by": False,
    "show_relbar_bottom": True,
}

html_static_path = ['_static']
html_css_files = [
    'css/custom.css',
]

pygments_style = 'sphinx'