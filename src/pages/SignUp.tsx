import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { UserPlus } from 'lucide-react';

const signUpSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    try {
      await signUp(data.email, data.password, data.fullName);
      navigate('/');
    } catch (error) {
      console.error('Sign up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto">
        <Card className="p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <UserPlus className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join LuxeShop today</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                {...register('fullName')}
                placeholder="John Doe"
                className="mt-1"
              />
              {errors.fullName && (
                <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="you@example.com"
                className="mt-1"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                placeholder="At least 6 characters"
                className="mt-1"
              />
              {errors.password && (
                <p className="text-sm text-destructive mt-1">{errors.password.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                placeholder="Confirm your password"
                className="mt-1"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-destructive mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Sign Up'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/signin" className="text-primary hover:underline font-semibold">
              Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
