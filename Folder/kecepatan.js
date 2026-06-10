export function hitungKecepatan(jarak, waktu, satuanJarak) {
    if (waktu <= 0) return { ms: 0, kmh: 0 };
    
    // Ubah jarak ke basis meter
    let meter = jarak;
    if (satuanJarak === 'km') meter = jarak * 1000;
    if (satuanJarak === 'cm') meter = jarak / 100;

    const ms = meter / waktu; // meter per detik
    const kmh = ms * 3.6;     // kilometer per jam

    return { ms, kmh };
}
