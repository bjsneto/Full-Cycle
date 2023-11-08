FROM golang:alpine as builder

WORKDIR /src/app

COPY ./app /src/app/

RUN apk add --no-cache upx

RUN CGO_ENABLED=0 go build -a -gcflags=all="-l -B -wb=false" -ldflags="-w -s"  -o main main.go

RUN upx --brute main

FROM scratch

COPY --from=builder /src/app/main /main

CMD ["/main"]
