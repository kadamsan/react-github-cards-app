import React from 'react'

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className='github-profile'>
                <img alt='img-placeholder' src={profile.avatar_url} width={75} />
                <div className='info'>
                    <div className='name'> {profile.name} </div>
                    <div className='company'> {profile.company} </div>
                </div>
            </div>
        );
    }

}

export default Card;