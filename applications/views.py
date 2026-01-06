from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import JobSeekerProfile, EmployerProfile

# Welcome Page
def welcome(request):
    if request.method == "POST":
        role = request.POST.get('role')
        request.session['role'] = role  # store role in session
        return redirect('signup')
    return render(request, 'applications/welcome.html')

# Signup Page
def signup(request):
    role = request.session.get('role')
    if not role:
        return redirect('welcome')  # safety check

    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        username = email.split('@')[0]  # simple username from email

        user = User.objects.create_user(username=username, email=email, password=password)

        # create corresponding profile
        if role == 'jobseeker':
            JobSeekerProfile.objects.create(user=user)
        else:
            EmployerProfile.objects.create(user=user)

        login(request, user)
        return redirect('dashboard')

    return render(request, 'applications/signup.html', {'role': role})

# Dashboard
def dashboard(request):
    user = request.user
    role = request.session.get('role')
    return render(request, 'applications/dashboard.html', {'role': role})

# Profile Page
def profile(request):
    user = request.user
    role = request.session.get('role')

    if role == 'jobseeker':
        profile = JobSeekerProfile.objects.get(user=user)
        if request.method == "POST":
            profile.full_name = request.POST.get('full_name')
            profile.position = request.POST.get('position')
            profile.cv = request.FILES.get('cv')
            profile.profile_complete = True
            profile.save()
            return redirect('dashboard')
        return render(request, 'applications/jobseeker_profile.html', {'profile': profile})

    else:  # employer
        profile = EmployerProfile.objects.get(user=user)
        if request.method == "POST":
            profile.company_name = request.POST.get('company_name')
            profile.profile_complete = True
            profile.save()
            return redirect('dashboard')
        return render(request, 'applications/employer_profile.html', {'profile': profile})
