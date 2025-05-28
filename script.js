    function showShortcuts() {
      Swal.fire({
        title: 'Atalhos VS Code',
        html: `<ul style="text-align: left;">
          <li><b>Ctrl + P</b>: Buscar arquivos</li>
          <li><b>Ctrl + Shift + P</b>: Paleta de comandos</li>
          <li><b>Ctrl + /</b>: Comentar linha</li>
          <li><b>Alt + Shift + ↓</b>: Duplicar linha</li>
          <li><b>Ctrl + D</b>: Selecionar palavra seguinte</li>
          <li><b>Ctrl + B</b>: Mostrar/ocultar barra lateral</li>
          <li><b>Ctrl + Space</b>: Sugestões de código</li>
        </ul>`,
        icon: 'info'
      });
    }