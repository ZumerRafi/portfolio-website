from django.shortcuts import render


def home(request):

    success = False

    if request.method == "POST":

        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        print("New Message")
        print(name)
        print(email)
        print(message)

        success = True

    return render(request, 'index.html', {

        'success': success

    })