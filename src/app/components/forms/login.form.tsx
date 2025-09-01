"use client"
import React, {useState} from "react";
import {Form, Input, Button} from "@heroui/react";

interface IProps {
    onClose: () => void
}

export default function LoginForm({onClose}: IProps) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

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
            <div className="flex gap-2">
                <Button color="primary" type="submit">
                    Войти
                </Button>
                <Button onPress={onClose} type="reset" variant="flat">
                    Отмена
                </Button>
            </div>
        </Form>
    );
}

