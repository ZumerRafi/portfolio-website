from django.shortcuts import render


def home(request):

    success = False

    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        print("NEW CONTACT MESSAGE")
        print("Name:", name)
        print("Email:", email)
        print("Message:", message)

        success = True

    return render(
        request,
        "index.html",
        {
            "success": success
        }
    )


def bert_project(request):

    return render(
        request,
        "projects/bert.html"
    )


def school_project(request):

    return render(
        request,
        "projects/school.html"
    )


def blood_project(request):

    return render(
        request,
        "projects/blood.html"
    )


def arduino_project(request):

    return render(
        request,
        "projects/arduino.html"
    )
