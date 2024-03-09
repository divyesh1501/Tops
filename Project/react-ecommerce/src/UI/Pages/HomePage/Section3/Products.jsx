import React from 'react'
import { Card, CardBody, CardGroup, CardImg, CardSubtitle, CardText, CardTitle } from 'react-bootstrap'
import { Button } from 'reactstrap';
import StarRating from './StarRating'
import product1 from "../Section3/Images/NA Product1.avif"
import product2 from "../Section3/Images/NA Product2.avif"
import product3 from "../Section3/Images/NA Product3.avif"
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { IndianRupee } from 'lucide-react';

export default function Products() {
    const IndianRupee = () => <span>&#8377;</span>;
    const PricingComponent = () => {
        const originalPrice = 799.00;
        const discountedPrice = 399.00;
    }
    return (
        <>

            <div>
                <div className='card'>
                    <CardGroup>
                        <div className='grid place-content-center'>
                            <Card >

                                <CardBody>

                                    <CardTitle tag="h5" style={{ width: "80%" }}>
                                        Wild Stone Whisky Perfume for Men,100ml
                                    </CardTitle>
                                    <Button className="flex justify-center" style={{
                                        backgroundColor: "#b63535", border: "none",
                                        height: "50px", width: "80%", borderRadius: "50px"
                                    }}>
                                        Coming Soon
                                    </Button>
                                    <div className='flex flex-row justify-center'>
                                        <span><ChevronLeft /></span>
                                        <span><ChevronRight /></span>
                                    </div>

                                </CardBody>
                            </Card>
                        </div>
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src={product1}
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5" style={{ width: "80%" }}>
                                    Wild Stone Whisky Perfume for Men,100ml
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    <div className='flex gap-2 align-items-center'>
                                        <StarRating rating={4} /><span>4(24 Reviews)</span>
                                    </div>
                                </CardSubtitle>
                                <CardText>
                                    <div className='flex flex-row align-items-center'>
                                        <span>MRP <IndianRupee /> <del>799.00 </del></span>
                                        <span className='ml-2 text-xl font-bold'> <IndianRupee /> 399.00</span>
                                    </div>
                                </CardText>
                                <CardText>
                                    (Inclusive of all taxes)
                                </CardText>
                                <Button className="" style={{
                                    backgroundColor: "#b63535", border: "none",
                                    height: "50px", width: "80%", borderRadius: "50px"
                                }}>
                                    Coming Soon
                                </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src={product2}
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5" style={{ width: "80%" }}>
                                    Wild Stone Cigar Perfume for Men,100ml
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    <div className='flex gap-2 align-items-center'>
                                        <StarRating rating={4} /><span>4(24 Reviews)</span>
                                    </div>
                                </CardSubtitle>
                                <CardText>
                                    <div className='flex flex-row align-items-center'>
                                        <span>MRP <IndianRupee /> <del>799.00 </del></span>
                                        <span className='ml-2 text-xl font-bold'> <IndianRupee /> 399.00</span>
                                    </div>
                                </CardText>
                                <CardText>
                                    (Inclusive of all taxes)
                                </CardText>
                                <Button className="" style={{
                                    backgroundColor: "#b63535", border: "none",
                                    height: "50px", width: "80%", borderRadius: "50px"
                                }}>
                                    Add to Cart
                                </Button>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src={product3}
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5" style={{ width: "80%" }}>
                                    Wild Stone Ammo Perfume for Men,100ml
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    <div className='flex gap-2 align-items-center'>
                                        <StarRating rating={4} /><span>4(24 Reviews)</span>
                                    </div>
                                </CardSubtitle>
                                <CardText>
                                    <div className='flex flex-row align-items-center'>
                                        <span>MRP <IndianRupee /> <del>799.00 </del></span>
                                        <span className='ml-2 text-xl font-bold'> <IndianRupee /> 399.00</span>
                                    </div>
                                </CardText>
                                <CardText>
                                    (Inclusive of all taxes)
                                </CardText>
                                <Button className="" style={{
                                    backgroundColor: "#b63535", border: "none",
                                    height: "50px", width: "80%", borderRadius: "50px"
                                }}>
                                    Add to Cart
                                </Button>
                            </CardBody>
                        </Card>

                    </CardGroup>
                </div>
            </div >
        </>
    )
}
