"use client"

import {initializeApp} from "@firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "@firebase/auth";
import {FormEvent} from "react";
import HeaderLogIn from "@/app/ui/headerLogIn";
import LogIn from "@/app/ui/logInForm";


export default function SignIn() {
    const firebaseConfig = {
        apiKey: "AIzaSyA_rEJ-n3HK_XS8vAu7n4H3MEBeKYV8AAM",
        authDomain: "supervet-e0cc9.firebaseapp.com",
        projectId: "supervet-e0cc9",
        storageBucket: "supervet-e0cc9.appspot.com",
        messagingSenderId: "1035177632942",
        appId: "1:1035177632942:web:163fd9848d9aa03cc3b93f",
        measurementId: "G-49C2RYWT5L"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        await signInWithEmailAndPassword(auth, email, password)
    }
  return (
            <>
            <HeaderLogIn />
            <LogIn />
            </>
        );
    }