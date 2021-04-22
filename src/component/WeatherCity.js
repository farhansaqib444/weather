import React, { useEffect, useState } from "react";
import { Card, Input, Row, Col } from 'antd';


const WeatherCity = () => {
    const [ city, setCity ] = useState(null);
    const [ search, setSearch ] = useState("Lahore");

    useEffect( () => {
        fetchApi();
    }, []);

    const fetchApi = async () => {
        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b04af520463d0bf24895405c630a5e04\n`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson);
            if (resJson.cod === 200) {
                setCity(resJson);
            }
        } catch (err) {
            console.log(err);
        }

    }

    return(
        <div>
            <div className="site-card-border-less-wrapper">
                <div>
                    <Card>
                        <Input placeholder="Basic usage" onChange={ (event) => {
                            setSearch(event.target.value)
                        }} onPressEnter={() => fetchApi()} />

                        {!city ? (
                            <p> Not Found </p>
                        ) : (
                            <div>
                                <h1> {city.weather[0].icon} {city.name}</h1>

                                <Row justify="center">
                                    <Col span={8}>
                                        <p>feels_like: {city.main.feels_like} </p>
                                    </Col>
                                    <Col span={8}>
                                        <p>Temp: {city.main.temp} </p>
                                    </Col>
                                    <Col span={8}>
                                        <p>feels_like: {city.main.feels_like} </p>
                                    </Col>
                                    <Col span={8}>
                                        <p>humidity: {city.main.humidity}</p>
                                    </Col>
                                </Row>
                            </div>
                        )
                        }
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default WeatherCity;
