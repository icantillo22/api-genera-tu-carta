let html = `
  <html>
    <head>
      <title> {{titlePDF}} </title>
      <style>
        body,
        html {
          font-family: arial, sans-serif;
          color: rgb(46, 46, 46);
        }
      </style>
    </head>
    <body>
      <p style="text-align: right;">
        {{city}}, a {{generationDate}}
      </p>
      <p>
        <b>{{name}}</b> <br/>
        <b>{{position}}</b> <br/>
      </p>
      <p style="text-align:justify;">
        Por este medio, me permito informarle que presento mi renuncia con carácter 
        irrevocable al puesto de <b>{{position}}</b>, cargo que he desempeñado desde el
        <b>{{startDate}}</b> y que se hará efectiva a partir del día <b>{{endDate}}.</b>
      </p>
      <p style="text-align:justify;">
        Lo anterior debido a que {{reason}}
      </p>
      <p style="text-align:justify;">
        Por otro lado, le manifiesto que, {{pendingTasks}}. Asimismo, hago de su conocimiento que en virtud de esta renuncia 
        voluntaria no me reservo acción o derecho que ejercita de ninguna naturaleza en el 
        futuro, ni en contra suya ni de la unidad administrativa o de la empresa.
      </p>
      <p style="text-align:justify;">
        Sin más por el momento, agradezco las atenciones brindadas por todos{{gratitude}}
        de mi cargo, así como la oportunidad de haberme permitido ser parte de este equipo. 
      </p>
      <p style="text-align:center;">
        <b>ATENTAMENTE</b>
      </p>
      <p style="text-align:center; display: {{showFirm}};">
        <img style="object-fit: contain;" width="300" height="100" src="{{firm}}" />
        <hr width="300" style="display: {{showFirm}};" />
      </p>
      <p style="text-align:center;">
        <b>{{name}}</b><br />
        <b>{{email}}</b><br />
        <b>{{cellPhone}}</b><br />
      </p>
    </body>
  </html>
`;

export default html