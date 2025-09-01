"use client"
import React, {useState} from "react";
import {Form, Input, Button} from "@heroui/react";

interface IProps {
    onClose: () => void
}

export default function RegisterForm({onClose}: IProps) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(e)
    };

    return (
        <Form className="w-full max-w-xs" onSubmit={onSubmit}>
            <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Email"
                labelPlacement="outside"
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                validate={(value) => {
                    if (!validateEmail(value)) {
                        return "Email введен не корректно";
                    }
                    if (value.length < 6) return 'Пароль должен быть не менее 6 символов';

                    return null;
                }}
            />
            <Input
                isRequired
                errorMessage="Please enter a valid password"
                label="Password"
                labelPlacement="outside"
                name="password"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                validate={(value) => {
                    if (!value) {
                        return "Пароль обязателен";
                    }
                    if (value.length < 6) return 'Пароль должен быть не менее 6 символов';

                    return null;
                }}
            />
            <Input
                isRequired
                errorMessage="Confirm password"
                label="Confirm password"
                labelPlacement="outside"
                name="confirm password"
                placeholder="Confirm password"
                type="confirm password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                validate={(value) => {
                    if (!value) {
                        return "Пароль обязателен";
                    }
                    if (value !== formData.password) return 'Пароль не совпадает';

                    return null;
                }}
            />
            <div className="flex gap-2">
                <Button color="primary" type="submit">
                    Зарегестрироваться
                </Button>
                <Button onPress={onClose} type="reset" variant="flat">
                    Отмена
                </Button>
            </div>
        </Form>
    );
}

