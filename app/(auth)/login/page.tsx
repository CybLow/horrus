"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createClient } from "@/lib/auth/client";
import { Button } from "@/components/ui/Shadcn/button";
import { Input } from "@/components/ui/Shadcn/input";
import { Label } from "@/components/ui/Shadcn/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Shadcn/card";
import { Alert, AlertDescription } from "@/components/ui/Shadcn/alert";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const supabase = createClient();
    const redirect = searchParams.get('redirect') || '/';

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                router.replace(redirect);
            }
        };
        checkSession();
    }, [router, redirect]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginForm) => {
        try {
            setIsLoading(true);
            setError(null);

            const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password,
            });

            if (signInError) throw signInError;

            if (authData.session) {
                router.replace(redirect);
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred during sign in");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
                    <CardDescription className="text-center">
                        Enter your credentials to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                {...register("email")}
                                className="border-2 border-[rgb(40,38,44,0.3)] hover:border-[rgb(40,38,44,0.5)]"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                {...register("password")}
                                className="border-2 border-[rgb(40,38,44,0.3)] hover:border-[rgb(40,38,44,0.5)]"
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500">{errors.password.message}</p>
                            )}
                        </div>
                        {error && (
                            <Alert variant="destructive">
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}
                        <Button
                            type="submit"
                            className="w-full bg-[#066FEC] hover:bg-[#045BC3] text-white"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <p className="text-sm text-center">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-[#066FEC] hover:underline">
                            Create one
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}