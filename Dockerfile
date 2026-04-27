FROM ubuntu:20.04
COPY . /app
RUN apt-get update && apt-get install -y python3
CMD ["python3", "/app/app.py"]
