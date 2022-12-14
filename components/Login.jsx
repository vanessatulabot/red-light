import React from 'react'
import styles from './Login.module.css'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormControl, Input,
        Button, InputGroup, InputRightElement } from '@chakra-ui/react'


const Login = () => {
    const { handleSubmit, register, formState: { errors, isSubmitting },
    } = useForm()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    function onSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2)
            )
            resolve(),
            window.location.href = "/dashboard";
          }, 1000)
        })
      }


    return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.imagediv}>
                        <img src="/images/login_picture.png"/>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.mainform}>
                        <h1> WELCOME </h1>
                        <h3> ADMINISTRATOR LOGIN </h3>
                            <div className={styles.forminput}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl isInvalid={errors.name}>
                                    <Input
                                    className={styles.inputs}
                                    id='name'
                                    placeholder='Enter username'
                                    {...register('name', {
                                        required: 'This is required',
                                        minLength: { value: 8, message: 'Minimum length should be 8' },
                                    })}
                                    />
                                    <InputGroup>
                                        <Input
                                        mt={2}
                                        className={styles.inputs}
                                        id='password'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        {...register('password', {
                                            required: 'This is required',
                                            minLength: { value: 5, message: 'Minimum length should be 5' },
                                        })}
                                    />
                                        <InputRightElement>
                                            <Button mt={4}  mr={1} h='1.80rem' size='sm' colorScheme='#042F39' color='white' onClick={handleClick}>
                                            {show ? 'Hide' : 'Show'}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>

                                    <FormErrorMessage>
                                    {errors.name && errors.name.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <Button mt={6} colorScheme='Orange' fontSize='xl' href='/home' isLoading={isSubmitting} type='submit' className={styles.primary}>
                                    LOGIN
                                </Button>
                                <Link href="/home">
                                    <button className={styles.secondary}>Back to Home</button>
                                </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


export default Login