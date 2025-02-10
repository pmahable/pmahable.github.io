import os
from PIL import Image
import io
import base64
import xml.etree.ElementTree as ET

def svg_to_png(svg_path, png_path):
    # Read the SVG file
    with open(svg_path, 'r') as f:
        svg_content = f.read()

    # Parse SVG to get dimensions
    root = ET.fromstring(svg_content)
    width = int(float(root.get('width', '200')))
    height = int(float(root.get('height', '200')))

    # Create a blank white background image
    img = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    
    # Save the image
    img.save(png_path)

input_dir = '/Users/pranavmahableshwarkar/CS/pmahable.github.io/public'
output_dir = '/Users/pranavmahableshwarkar/CS/pmahable.github.io/public/research'

os.makedirs(output_dir, exist_ok=True)

svgs = ['computational-chemistry.svg', 'computational-genomics.svg', 'deep-learning.svg']

for svg in svgs:
    input_path = os.path.join(input_dir, svg)
    output_path = os.path.join(output_dir, svg.replace('.svg', '.png'))
    svg_to_png(input_path, output_path)
    print(f"Converted {svg} to PNG")
