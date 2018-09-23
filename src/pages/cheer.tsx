import _ from 'lodash';
import Cookies from 'js-cookie';
import React, { Component } from "react";
import styled from 'styled-components';
import { start, add, DB_NAME, getDatabase } from '../configs/firebase';

import { CheerInput, CheerCard } from '../components';

interface ICheer {
    text: string, createdAt: number;
}

interface IStates {
    cheers: { [key: string]: ICheer };
    text: string;
}

const Container = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow-x: auto;
    overflow-y: auto;
    background-color: #f0f9fc;
`;

const MainView = styled.div`
  position: absolute;
  width: 100%;
  min-height: 1024px;
  background-color: #eee;
`;

const Main1Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 806px;
`;

const Main2Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 2;
  width: 977px;
`;

const Main3Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CheerInputView = styled(CheerInput)`
    width: 70%;
    margin: 170px auto 40.5px auto;
    z-index: 10;
`;

const CheerView = styled.div`
    width: 100%;
    margin: 0 auto 0 auto;
    z-index: 10;
`;

const CheerCardView = styled(CheerCard)`
  width: 70%;
  margin: 0 auto 0 auto;
`;

start();

class CheerPage extends Component<object, IStates> {
    public state = {
        cheers: {},
        text: "",
    };

    public async componentDidMount() {
        const database = getDatabase();
        database.ref(`/${DB_NAME}`).on("value", (snapshot) => {
            this.setState({
                cheers: snapshot.val()
            });
        }, (errorObject: any) => {
            console.error("The read failed: " + errorObject.code);
        });
    }
    render() {
        const { text, cheers } = this.state;
        const cheerKeys = _.keys(cheers);
        return (
            <Container>
                <MainView>
                    <Main1Image src={require("./images/main-1@2x.png")} />
                    <Main2Image src={require("./images/main-2@2x.png")} />
                    <Main3Image src={require("./images/main-3@2x.png")} />
                </MainView>
                <CheerInputView onChange={this.onTextChange} onSubmit={this.onTextSubmit} value={text} />
                <CheerView>
                    {_.map(cheerKeys, (key: string, index: number) => {
                        const cheer: ICheer = _.get(cheers, key);

                        if (index === 0) {
                            return <CheerCardView key={key} title={cheer.text} createdAt={cheer.createdAt} type="top" />;
                        }
                        if (index === cheerKeys.length - 1) {
                            return <CheerCardView key={key} title={cheer.text} createdAt={cheer.createdAt} type="bottom" />;
                        }
                        return <CheerCardView key={key} title={cheer.text} createdAt={cheer.createdAt} type="middle" />;
                    })}
                </CheerView>
            </Container>
        );
    }

    private onTextChange = (event: any) => {
        this.setState({ text: event.target.value });
    }

    private onTextSubmit = () => {
        const { text } = this.state;
        const isSubmit = Cookies.get("isSubmit");
        if (isSubmit === "true") {
            alert("하루에 한번 가능합니다.");
            return;
        }
        Cookies.set('isSubmit', 'true', { expires: 1, path: '' });
        add(text);
        this.setState({
            text: ""
        });
    }
}

export default CheerPage;
