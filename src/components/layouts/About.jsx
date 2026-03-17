import React from 'react'
import Container from '../Container'

const About = () => {
    return (
        <section id='about'>
            <div className="py-10 bg-[#0A0F1C] font-geist group:">
                <Container>
                    <div className="heading">
                        <h3 className='text-[36px] font-bold text-[#EDEDED] beforeAfter'>About Me</h3>
                    </div>
                    <div className="mt-[72px]">
                        <div className="flex justify-between">
                            <div className="left lg:w-[816px]">
                                <div className="bio flex gap-x-5">
                                    <div className=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default About