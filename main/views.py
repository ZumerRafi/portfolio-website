from django.shortcuts import render
from django.core.mail import send_mail


def home(request):

    success = False

    if request.method == "POST":

        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        full_message = f"""
        Name: {name}
        Email: {email}

        Message:
        {message}
        """

        send_mail(
            subject="New Portfolio Contact Message",
            message=full_message,
            from_email=email,
            recipient_list=['ilyahaider15313@gmail.com'],
        )

        success = True

    return render(request, 'index.html', {

        'success': success

    })