from django.shortcuts import render
from django.core.mail import send_mail


def home(request):

    success = False

    if request.method == "POST":

        try:

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
                from_email='zummerjutt12@gmail.com',
                recipient_list=['zummerjutt12@gmail.com'],
                fail_silently=False,
            )

            success = True

        except Exception as e:

            print(e)

    return render(request, 'index.html', {

        'success': success

    })