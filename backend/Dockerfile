FROM python:3.8-slim

WORKDIR /backend

COPY . . 
RUN pip3 install -r requirements.txt
ENV FLASK_APP=server

CMD [ "flask", "run", "--host=0.0.0.0"]