'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/Shadcn/button"
import { Input } from "@/components/ui/Shadcn/input"
import { Label } from "@/components/ui/Shadcn/label"

export default function SignIn() {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const router = useRouter()

  const handleSignUpClick = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      router.push('/sign-up')
    }, 300) // Délai correspondant à la durée de l'animation
  }

  return (
      <div className="flex h-screen bg-white overflow-hidden">
        <motion.div
            className="flex w-full h-full"
            animate={{ x: isTransitioning ? '-50%' : '0%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="w-1/2 min-w-[50vw] bg-white p-12 flex flex-col justify-center items-center">
            <div className="w-full max-w-md">
              <h1 className="text-3xl font-bold mb-6">Connexion à votre compte</h1>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="password">Mot de passe</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Se connecter
                </Button>
              </form>
              <div className="mt-6 text-center text-sm text-gray-600">
                <p>OU CONTINUER AVEC</p>
                <Button variant="outline" className="mt-4 w-full">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                    <path fill="#34A853" d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
                    <path fill="#4A90E2" d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5818182 23.1818182,9.90909091 L12,9.90909091 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
                    <path fill="#FBBC05" d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
                  </svg>
                  Continuer avec Google
                </Button>
              </div>
            </div>
          </div>
          <div className="w-1/2 min-w-[50vw] bg-gradient-to-br from-teal-400 to-teal-600 p-12 flex flex-col justify-center items-center text-white">
            <div className="w-full max-w-md text-center">
              <h2 className="text-3xl font-bold mb-6">Nouveau ici ?</h2>
              <p className="mb-8">
                Inscrivez-vous et découvrez de nouvelles opportunités !
              </p>
              <Button
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-teal-600"
                  onClick={handleSignUpClick}
              >
                S'inscrire
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
  )
}