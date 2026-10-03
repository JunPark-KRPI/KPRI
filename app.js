const toast = document.querySelector('#toast');
function showToast(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 2400); }
document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => { document.querySelector('.nav-item.active').classList.remove('active'); item.classList.add('active'); }));
document.querySelector('#exportBtn').addEventListener('click', () => showToast('검증 리포트가 준비되었습니다.'));
document.querySelector('#editDesign').addEventListener('click', () => showToast('검사 구조 설계 편집기를 열었습니다.'));
document.querySelector('#riskDetail').addEventListener('click', () => showToast('Risk Zone의 2개 검토 항목을 확인합니다.'));
