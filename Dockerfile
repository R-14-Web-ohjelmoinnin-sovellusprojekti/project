FROM openjdk:20
LABEL maintainer myname
COPY ./auth-0.0.1-SNAPSHOT.jar auth.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
