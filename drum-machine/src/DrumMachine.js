import React, { Component } from 'react';

const soundData = [
    {
        key: 'Q',
        keyCode: 81,
        bankOne: {
            id: 'Heater-1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        bankTwo: {
            id: 'Chord_1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
        }
    },
    {   
        key: 'W',
        keyCode: 87,
        bankOne: {
            id: 'Heater-2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        bankTwo: {
            id: 'Chord_2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
        }
    },
    {   
        key: 'E',
        keyCode: 69,
        bankOne: {
            id: 'Heater-3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        bankTwo: {
            id: 'Chord_3',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
        }
    },
    {   
        key: 'A',
        keyCode: 65,
        bankOne: {
            id: 'Heater-4',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        bankTwo: {
            id: 'Give_us_a_light',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
        }
    },
    {   
        key: 'S',
        keyCode: 83,
        bankOne: {
            id: 'Heater-6',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        bankTwo: {
            id: 'Dry-Ohh',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
        }
    },
    {   
        key: 'D',
        keyCode: 68,
        bankOne: {
            id: 'Dsc_Oh',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        bankTwo: {
            id: 'Bld_H1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
        }
    },
    {   
        key: 'Z',
        keyCode: 90,
        bankOne: {
            id: 'Kick_n_Hat',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        bankTwo: {
            id: 'punch_kick_1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
        }
    },
    {   
        key: 'X',
        keyCode: 88,
        bankOne: {
            id: 'RP4_KICK_1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        bankTwo: {
            id: 'side_stick_1',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
        }
    },
    {   
        key: 'C',
        keyCode: 67,
        bankOne: {
            id: 'Cev_H2',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        },
        bankTwo: {
            id: 'Brk_Snr',
            url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
        } 
    }
];

class DrumMachine extends Component {
    constructor(props){
        super(props);
        this.state = {
            display: ''
        }

        this.setDisplay = this.setDisplay.bind(this);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }
    setDisplay(name){
        this.setState({
            display: name
        })
    }
    playSound(e) {
        const sound = document.getElementById(e.target.value);
        let value = soundData.filter((el) => e.target.value === el.key);
        this.setDisplay(value[0][this.props.bank].id);
        sound.currentTime = 0;
        sound.play();
    }
    handleKeyPress(e){
        let value = soundData.filter((el, i) => e.keyCode === el.keyCode);
        let sound = document.getElementById(value[0].key);
        this.setDisplay(value[0][this.props.bank].id);
        sound.currentTime = 0;
        sound.play();
    }
    
    render() {
        let pad = soundData.map((el, i) => 
            {
                return (
                    <div className='pad'>
                        <button className='drum-pad' id={el[this.props.bank].id} onClick={this.playSound} value={el.key} style={this.state.padStyle}>
                          <audio className='clip' id={el.key} src={el[this.props.bank].url}></audio>{el.key}</button>
                    </div>
                )
            }); 
        return(
            <div id="drum-machine">
                <div className="pad-container">
                { pad }
                </div>
            <div id="display">{this.state.display}</div>
            </div>
        );
    }
}

export default DrumMachine;