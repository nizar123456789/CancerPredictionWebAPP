from flask import Flask, render_template, request,jsonify
from flask_cors import CORS
import keras.utils as image
from pydantic import BaseModel
import cv2
import numpy as np
from PIL import Image
from keras.models import load_model
from flask import request
from flask import jsonify

class Tumor_prediction(BaseModel):
  prediction:bool
  probability:float

app = Flask(__name__)
np.set_printoptions(precision=3)
cors = CORS(app, resources={r"*": {"origins": "*"}})
def get_model():
    global model
    model = load_model('/home/nizar/Desktop/testingfastapi/trumor_detection_model.h5')
    print(" * Model loaded!")

model = load_model('/home/nizar/Desktop/testingfastapi/trumor_detection_model.h5')
model.make_predict_function()



def predictionResponse(probability):
  res=True if probability[0]>0.5 else False
  
  return Tumor_prediction(prediction=res,probability=probability)

def predict_label(img_path):
    i = image.load_img(img_path, target_size=(224, 224))
    print(" 111")
    im = Image.open(img_path)
    print(" 111")
    img = cv2.imread(img_path)

    il = cv2.resize(img, (224, 224))
    il.shape

    p = model.predict(np.expand_dims(il, 0))
    
    if p < 0.3:
        num = str(p)
        print("Normal")
        print (p) ;
        print('%.3f' % p)
        return("Normal")
    else:
        num = str(p)
        print("Benine")
        print('%.3f' % p)
        return("Benine")



get_model()
#predict_label("/home/nizar/Desktop/testingfastapi/Yes.jpg")

@app.route("/")
def hello_world():
    return {"message": "Hello World"}
@app.route("/predict",methods=['POST'])
def predic():
    imagefile = request.files['imagefile']
    image_path = "./images/" + imagefile.filename
    imagefile.save(image_path)

    p = predict_label(image_path)
    return  jsonify(p)


'''
def get_model2():
    global model_2
    model_2 = load_model('/home/nizar/Desktop/medicalapp/testingfastapi/model.h5')
    print(" * Model loaded!")



model_2=load_model('/home/nizar/Desktop/medicalapp/testingfastapi/model.h5')
model_2.make_predict_function()

model_2.predict('/home/nizar/Desktop/medicalapp/testingfastapi/images/skinCancerBenine.jpg')
'''