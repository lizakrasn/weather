import React from "react";
import { 
  StyledSvg
 } from './styles'

export interface IconProps {
  type: string,
  className?: string
}

export const Icon = ({type, className}: IconProps) => {
  return type === 'restart' ? (
    <StyledSvg
      className={`Icon ${className}`}
      width="25px"
      height="25px"
      viewBox="0 0 50 50"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M 25 2 A 2.0002 2.0002 0 1 0 25 6 C 35.517124 6 44 14.482876 44 25 C 44 35.517124 35.517124 44 25 44 C 14.482876 44 6 35.517124 6 25 C 6 19.524201 8.3080175 14.608106 12 11.144531 L 12 15 A 2.0002 2.0002 0 1 0 16 15 L 16 4 L 5 4 A 2.0002 2.0002 0 1 0 5 8 L 9.5253906 8 C 4.9067015 12.20948 2 18.272325 2 25 C 2 37.678876 12.321124 48 25 48 C 37.678876 48 48 37.678876 48 25 C 48 12.321124 37.678876 2 25 2 z"/>
    </StyledSvg>
  ) : type === 'search' ? (
    <StyledSvg
      className={`Icon ${className}`}
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="20px"
      height="20px"
    >
      <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/>
    </StyledSvg>
  ) : (
    <></>
  )
}
