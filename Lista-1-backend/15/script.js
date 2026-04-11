function validarFormulario(formulario) {
   return Object.values(formulario).every(valor => !!valor);
}
