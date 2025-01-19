import Swal from "sweetalert2";

export const toast = Swal.mixin({
    buttonsStyling: false,
    customClass: {
        confirmButton: "btn btn-success m-1",
        cancelButton: "btn btn-danger m-1",
        input: "form-control",
    },
});
export const swalSimple = (msg: string) => {
    toast.fire(msg);
}
export const swalInfo = (titulo: string, msg: string) => {
    toast.fire(titulo, msg, "info");
}
export const swalSuccess = (msg: string) => {
    toast.fire("Listo!", msg, "success");
}
export const swalWarning = (msg: string) => {
    toast.fire("Advertencia", msg, "warning");
}
export const swalError = (msg: string) => {
    toast.fire("Error", msg, "error");
}
export const swalQuestion = (msg: string) => {
    return Swal.fire({
        title: 'Aviso',
        text: msg,
        showDenyButton: true,
        confirmButtonText: "Aceptar",
        denyButtonText: "Cancelar",
        customClass: {
            confirmButton: "btn-confirm-alert",
        },
    })
}
