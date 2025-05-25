"use client"

import React from 'react'
import styles from "./Header.module.css"
import DarkModeToggle from '../dark-toggle/DarkModeToggle'
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
  return (
    <div className={styles.header}>
        <Link className= {styles.logo } href="/"> 
        <Image className={styles.img} src="/images/logo.png" alt="logo" width={40} height={40} />
        <h1 className={styles.title}> تَقوَى </h1>
        </Link>
        <div className={styles.links}> 
       
            <Link className={pathname === "/" ? styles.active : ""} href="/"> الصفحة الرئيسية </Link>
            {/* <Link href="/prayer-times" > اوقات الصلاة </Link> */}
            <Link className={pathname === "/books" ? styles.active : ""} href="/books" > الكتب </Link>
            <Link className={pathname === "/articles" ? styles.active : ""} href="/articles" > المقالات </Link>   
            <Link className={pathname === "/elm-path" ? styles.active : ""} href="/elm-path" > مسار العلم الشرعي </Link>
            <Link href="https://snazzy-hamster-390b7d.netlify.app" > الاذكار </Link>   
            <Link className={pathname === "/about" ? styles.active : ""} href="/about" > من نحن </Link>   
            <Link className={pathname === "/contact" ? styles.active : ""} href="/contact" > تواصل معنا </Link>   
        </div>
        <DarkModeToggle />
    </div>
  )
}

export default Header