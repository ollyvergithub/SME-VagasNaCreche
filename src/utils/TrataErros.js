import React, {Fragment} from 'react'
import './TrataErros.css'

class TrataErros extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg_erro: this.props.msg_erro,
            msg_erro_link: this.props.msg_erro_link,
            msg_erro_link_url: this.props.msg_erro_link_url,
            classe_css: this.props.classe_css,
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.msg_erro ? (
                    <div className={`alert alert-danger ${this.state.classe_css}`} role="alert">
                        <strong>{this.state.msg_erro}</strong>
                        {this.state.msg_erro_link && this.state.msg_erro_link_url ? (
                            <strong><a className="texto-alert-dander" href={this.state.msg_erro_link_url}> {this.state.msg_erro_link}</a></strong>
                        ) : null}
                    </div>
                ) : null}
            </Fragment>
        );
    }


}

export default TrataErros