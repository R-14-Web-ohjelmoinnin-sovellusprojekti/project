FROM openjdk:20
LABEL maintainer myname
COPY ./auth-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]