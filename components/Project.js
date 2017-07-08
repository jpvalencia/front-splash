export default  class Project extends React.Component {
    render () {
        return (
          <header role="document">
              <span className="nombre-inmobiliaria">{this.props.nombre_inmobiliaria}</span>
              <span className="nombre-proyecto">{this.props.nombre_proyecto}</span>
              <span className="numero-proyecto">Depto {this.props.nro_depto_casa}</span>
              <span className="valor-uf">{this.props.valor} UF</span>
            </header>
        );
    }
}
