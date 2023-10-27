import React from 'react'

const TestimonialContext = React.createContext()
export { TestimonialContext }

export default function Testimonial({ children, image, text, name, workTitle }) {
    
    const [testimonialImg, setTestimonialImg] = React.useState(image)
    const [testimonialText, setTestimonialText] = React.useState(text)
    const [testimonialName, setTestimonialName] = React.useState(name)
    const [testimonialWorkTitle, setTestimonialWorkTitle] = React.useState(workTitle)

    testimonialImg === '' 
        ? setTestimonialImg('Image.png') 
        : ''

    testimonialText === '' 
        ? setTestimonialText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.')
        : ''

    testimonialName === '' 
        ? setTestimonialName('May Andersons')
        : ''

    testimonialWorkTitle === '' 
        ? setTestimonialWorkTitle('Workcation, CTO')
        : ''

    return (
        <TestimonialContext.Provider value={{
                testimonialImg,
                testimonialText,
                testimonialName,
                testimonialWorkTitle
            }}
        >
            {children}
        </TestimonialContext.Provider>
    )
}