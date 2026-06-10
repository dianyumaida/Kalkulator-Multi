export function hitungAngin(kecepatan, satuanKecepatan) {
    // Ubah kecepatan ke basis m/s
    let ms = kecepatan;
    if (satuanKecepatan === 'kmh') ms = kecepatan / 3.6;

    const pa = 0.6 * Math.pow(ms, 2); // Pascal
    return {
        pa: pa,
        bar: pa / 100000,
        psi: pa / 6894.76
    };
}
