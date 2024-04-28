import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css'

const Faq = () => {
  return (
    <div className='faq-outer-div'>
        <div className='row'>
            <div className='col-md-6'>
                <h6>FAQ</h6>
                <h2>Questions about Scalp Micropigmentation</h2>
                <p>
                    The answers below will help teach you the basics about scalp micropigmentation. For further information, contact us with your questions or book a free consultation with one of our expert SMP artists. This quick, non-surgical treatment is a great option for anyone looking for realistic, lasting results for their hair-loss struggles. A hair tattoo is a cosmetic treatment performed by one of our professional practitioners at one of our following clinic locations: Chicago, Fort Lauderdale, Houston, Los Angeles, and New York City. Your expert practitioner will make tiny impressions onto the client’s skin in the desired location to replicate the look of small hair follicles. This treatment provides guaranteed results for clients no matter their skin tone, gender, or age. With the proper care and follow-up sessions, the scalp tattoo can last for 4-6 years before a touch-up is needed.
                </p>
            </div>
            <div className='col-md-6'>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className='my-3'>
              <Accordion.Header className='faq-accordian-white-text'>What services do you offer at Scalp Micro USA</Accordion.Header>
              <Accordion.Body className='faq-accordian-white-text'>
                We offer scalp micropigmentation for hair loss, beard enhancement, long hair density fills, and scar camouflage.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className='my-3'>
              <Accordion.Header className='faq-accordian-white-text'>Where are you located?</Accordion.Header>
              <Accordion.Body className='faq-accordian-white-text'>
                We have clinics in New York City, Los Angeles, Houston, Chicago, and South Florida. You can visit one of our clinics to receive scalp micropigmentation treatments.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className='my-3'>
              <Accordion.Header className='faq-accordian-white-text'>Why should we get our treatment done at Scalp Micro USA vs another provider in the area?</Accordion.Header>
              <Accordion.Body className='faq-accordian-white-text'>
                Scalp Micro USA is the most experienced company in SMP having been in business for over 7 years and treated 10,000+ happy clients. We’ve seen every case and delivered natural results. Always do your research and book a free consultation with our team to see if we are a fit for your treatment goals.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className='my-3'>
              <Accordion.Header className='faq-accordian-white-text'>Who is a good candidate for scalp micropigmentation? </Accordion.Header>
              <Accordion.Body className='faq-accordian-white-text'>
                Number 1: If you have male or female pattern baldness Number 2:  If you have alopecia: Alopecia is a SMP can help create the appearance of hair where it is missing due to alopecia. Number 3: If you have scars on their scalp: SMP can camouflage scars caused by surgery, injury, or previous hair transplant procedures. Number 3: If you want to create a more defined hairline: SMP can help create a more natural-looking hairline for those with a receding hairline or who want to change their hairline. Number 4: If you want to add density to thinning hair: SMP can help make hair look fuller and denser by creating the illusion of more hair follicles.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" className='my-3'>
              <Accordion.Header className='faq-accordian-white-text'>Where Can I Hear from Customers?</Accordion.Header>
              <Accordion.Body className='faq-accordian-white-text'>
                Don’t just take our word for it. Scalp micropigmentation has proven to be an effective treatment option for men and women throughout the United States. Explore our photo results and reviews from real clients. Browse some of the amazing micropigmentation results and use these images and testimonials as inspiration for your new look.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            </div>
        </div>
    </div>
  )
}

export default Faq