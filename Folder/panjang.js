export function hitungPanjang(nilai, satuanAsal) {
    // Ubah semua input ke basis Meter (m) terlebih dahulu
    let meter = nilai;
    if (satuanAsal === 'km') meter = nilai * 1000;
    if (satuanAsal === 'cm') meter = nilai / 100;

    return {
        m: meter,
        km: meter / 1000,
        cm: meter * 100
    };
}
