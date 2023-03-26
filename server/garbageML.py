import keras.applications.mobilenet_v2 as mobilenetv2
import numpy as np
from PIL import Image as PImage
from keras.models import load_model
import os
import sys

is_old = False
print("Am I using the old version? ", is_old)


def classify_image(img, name):
    width = 224
    height = 224

    img = img.resize((width, height))
    img = np.array(img)
    img = mobilenetv2.preprocess_input(img)

    preds = model.predict(np.array([img]))

    if is_old:
        class_labels = ['biological', 'metal', 'paper', 'plastic', 'trash', 'white-glass']
    else:
        class_labels = ['biological', 'brown-glass', 'cardboard',
                        'green-glass', 'metal', 'paper', 'plastic', 'trash', 'white-glass']
    predicted_class_label = class_labels[np.argmax(preds)]
    confidence_score = np.max(preds)
    if name is not None:
        print(f"The image {name}, is classified as {predicted_class_label} with a confidence score of {confidence_score:.2f}.")
    else:
        print(predicted_class_label)
        print(confidence_score)


if len(sys.argv) == 2:
    test_pic = sys.argv[1]

# Load the pre-trained model
if is_old:
    model = load_model('my_old_model.h5')
else:
    model = load_model('my_model.h5')
# Load the images
if len(sys.argv) == 2:
    img = PImage.open(test_pic)
    classify_image(img, None)
else:
    for pics in os.walk("testPics"):
        for image in pics[2]:
            img = PImage.open("testPics/" + image)
            classify_image(img, image)
