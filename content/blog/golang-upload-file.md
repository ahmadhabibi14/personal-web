---
title: "How To Upload File with HTML Form in Golang"
draft: false
date: 2023-01-26T12:39:02+08:00
lang: en
keywords: Go, Blog, Tech, HTML

image: /cover/default.png

description: "A personal web and blog site of Ahmad Habibi"
---

In this tutorial, we are going to be building simple file-upload HTTP server that allows you to upload your files to the server running your Go application.

So, how to make an upload file handler in golang ?

Before we going start, make sure that you already familiar with basic golang, http method. Okay, now create a folder which we are going to stores 2 files: **main.go** and **index.html**.

### 1. Import library

Let's start in our go file (**main.go**). At the beginning we will declare some necessary packages/library.

```go
package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"html/template"
)
```

### 2. Create an _uploadHandler_ function

To do the most important operation, make a handler function which we're gonna call it **uploadHandler**

```go
func uploadHandler(w http.ResponseWriter, r *http.Request) {}
```

After that, put these codes inside of **uploadHandler** function.

In this code, we make an **if** condition that if http method type is **GET**, return a HTML page.

```go
if r.Method == "GET" {
	parseForm, _ := template.ParseFiles("index.html")
	err := parseForm.Execute(w, nil)
	if err != nil {
		log.Printf("Error occurred while executing the template or writing its output : ", err)
		return
	}
}
```

Now, the main http method is **POST**, we're gonna put the most important operation here.

```go
else if r.Method == "POST" {
	// get file from HTML form
	file, header, err := r.FormFile("file")
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	defer file.Close() // tutup connection to form

	// Determine directory path
	uploadDir := "./uploads"
	// Create directory if its not exist
	if _, err := os.Stat(uploadDir); os.IsNotExist(err) {
		os.Mkdir(uploadDir, 0755)
	}

	// Create a new file inside of directory
	filename := filepath.Join(uploadDir, header.Filename)
	newFile, err := os.Create(filename)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer newFile.Close()

	// Copy uploaded file to the new file
	_, err = io.Copy(newFile, file)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	// Print out message that file is succeed to upload
	fmt.Fprintf(w, "File %s uploaded !", header.Filename)
}
```

if the http method is not one of above, return or print error:

```go
else {
	fmt.Println("Error Http Method")
}
```

### 2. Execute route

Make route and serve http server with **net/http** library. We are going to use an **"/upload"** endpoint to upload file.

```go
func main() {
	http.HandleFunc("/upload", uploadHandler)
	err := http.ListenAndServe("localhost:8080", nil)
	if err != nil {
		log.Fatal("Error starting http server : ", err)
		return
	}
}
```

### 3. Create a HTML page

If we see the code above, we have serve html page with **html/template** package. Now let's write the html page with form which we will use to upload or send file to server.

```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Go upload file</title>
</head>
<body>
   <div class="container">
      <form
			method="post"
			enctype="multipart/form-data"
			action="/upload"
		>
         <label for="file">Upload File</label>
         <input type="file" name="file" id="file">
         <button type="submit">Submit</button>
      </form>
   </div>
</body>
</html>
```

To make it prettier, put a **CSS** code in our HTML.

```css
:root {
	--primary-color: rgb(14, 15, 27);
   --secondary-color: rgb(225, 233, 248);
}
.container {
   display: flex;
   justify-content: center;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   width: 100%;
}
form {
   display: flex;
   flex-direction: column;
   padding: 20px;
   border: 2px solid var(--primary-color);
   color: var(--primary-color);
   border-radius: 10px;
   margin-top: 50px;
   min-width: fit-content;
}
form > label {
   font-size: 30px;
   font-weight: 700;
   text-align: center;
}

form > input[type="file"] {
   margin: 20px 0 20px 0;
}
form > button {
   font-size: 17px;
   padding-top: 5px;
   padding-bottom: 5px;
   border-radius: 10px;
   background-color: var(--primary-color);
   color: var(--secondary-color);
}
form > button:hover {
   background-color: var(--primary-color);
   background-color: rgba(14, 15, 27, 0.9);
}
```

### 4. Result

Run our go script with command: **go run main.go**. And open up the web browser.

{{< images src="/images/go-upload-file/01.png" alt="go-upload-file" >}}

Let's try to upload a file, for example here I put an image:

{{< images src="/images/go-upload-file/02.png" alt="go-upload-file" >}}

Submit the form, and this is the result... **File anya.jpg uploaded !**, that means our code is work as expected.

{{< images src="/images/go-upload-file/03.png" alt="go-upload-file" >}}

If we now look at the structure directory, there is a **/uploads** folder which stores the files we've uploaded.

{{< images src="/images/go-upload-file/04.png" alt="go-upload-file" >}}

### Conclusion...

We have successfully created a simple upload-file http server in golang. Hopefully you found this tutorial useful and entertaining!