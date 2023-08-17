'use client';

import axios from 'axios';
import React,{ useState } from 'react'
import { User } from '@prisma/client'

import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { CldUploadButton } from 'next-cloudinary';

import Input from "../components/inputs/Input";
import Button from '../components/ChatButton';
import Image from 'next/image';
import { toast } from 'react-hot-toast';


interface ProfileProps {
    isOpen?: boolean;
    onClose: () => void;
    currentUser: User;
  }

  const Profile: React.FC<ProfileProps> = ({
   
  currentUser = {}
  }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
          errors,
        }
      } = useForm<FieldValues>({
          defaultValues: {
            name: currentUser?.name,
            image: currentUser?.image
          }
      });
    
      const image = watch('image');
    
      const handleUpload = (result: any) => {
        setValue('image', result.info.secure_url, { 
          shouldValidate: true 
        });
      }
    
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
    
        axios.post('/api/settings', data)
        .then(() => {
          router.refresh();
          
        })
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false));
      }
    

  return (
    <div>
               <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-20">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 
              className="
                text-base 
                font-semibold 
                leading-7 
                text-gray-900
              "
            >
              プロフィール
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              公開するプロフィールを編集できます。
            </p>

            <div className="mt-10 flex flex-col gap-y-8 min-w-[230px] lg:w-[620px] ">
              <Input
                disabled={isLoading}
                label="Name" 
                id="name" 
                errors={errors} 
                required 
                register={register}
              />
              <div>
                <label 
                  htmlFor="photo" 
                  className="
                    block 
                    text-sm 
                    font-medium 
                    leading-6 
                    text-gray-900
                  "
                >
                  photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                <Image
                    width="48"
                    height="48" 
                    className="rounded-full" 
                    src={image || currentUser?.image || '/images/placeholder.jpg'}
                    alt="Avatar"
                  />
                  <CldUploadButton 
                    options={{ maxFiles: 1 }} 
                    onUpload={handleUpload} 
                    uploadPreset="slvovxli"
                  >
                    <Button
                      disabled={isLoading}
                      secondary
                      type="button"
                    >
                      アバターの変更
                     
                    </Button>
                  </CldUploadButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="
            mt-6 
            flex 
            items-center 
            justify 
            gap-x-6
          "
        >
          <Button 
            disabled={isLoading}
            secondary 
    
          >
            Cancel
          </Button>
          <Button 
            disabled={isLoading}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
          </div>
  )
}

export default Profile