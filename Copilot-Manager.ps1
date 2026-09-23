# ==============================================================================
# COPILOT-MANAGER: TƯ TƯỞNG HỒ CHÍ MINH - DIGITAL MAGAZINE PRESENTATION
# Console-only native launcher & orchestration utility
# ==============================================================================

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$Host.UI.RawUI.WindowTitle = "HCM Presentation - Copilot Manager"

function Show-Header {
    Clear-Host
    Write-Host "==================================================================" -ForegroundColor DarkRed
    Write-Host " ★  TƯ TƯỞNG HỒ CHÍ MINH VỀ NHÀ NƯỚC CỦA DÂN, DO DÂN, VÌ DÂN  ★" -ForegroundColor Yellow
    Write-Host "    Interactive Digital Magazine & 3D Exhibition Platform" -ForegroundColor Gray
    Write-Host "==================================================================" -ForegroundColor DarkRed
    Write-Host ""
}

function Show-Menu {
    Show-Header
    Write-Host " Vui lòng chọn tác vụ cần thực hiện:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "  [1] Khởi chạy Development Server (npm run dev)" -ForegroundColor White
    Write-Host "  [2] Xây dựng bản phát hành Production (npm run build)" -ForegroundColor White
    Write-Host "  [3] Chạy máy chủ Production (npm run start)" -ForegroundColor White
    Write-Host "  [4] Kiểm tra chất lượng mã nguồn (npm run lint)" -ForegroundColor White
    Write-Host "  [5] Kiểm tra & giải phóng tiến trình cổng 3000" -ForegroundColor White
    Write-Host "  [0] Thoát" -ForegroundColor DarkGray
    Write-Host ""
}

do {
    Show-Menu
    $choice = Read-Host "Nhập lựa chọn của bạn [0-5]"

    switch ($choice) {
        "1" {
            Show-Header
            Write-Host "[INFO] Đang khởi chạy Development Server trên cổng 3000 (Console-only)..." -ForegroundColor Green
            npm run dev
            Write-Host "`nNhấn phím bất kỳ để quay lại menu..." -ForegroundColor Gray
            [Console]::ReadKey($true) | Out-Null
        }
        "2" {
            Show-Header
            Write-Host "[INFO] Đang thực thi npm run build..." -ForegroundColor Green
            npm run build
            Write-Host "`nHoàn thành! Nhấn phím bất kỳ để quay lại menu..." -ForegroundColor Gray
            [Console]::ReadKey($true) | Out-Null
        }
        "3" {
            Show-Header
            Write-Host "[INFO] Đang khởi chạy Production Server (npm run start)..." -ForegroundColor Green
            npm run start
            Write-Host "`nNhấn phím bất kỳ để quay lại menu..." -ForegroundColor Gray
            [Console]::ReadKey($true) | Out-Null
        }
        "4" {
            Show-Header
            Write-Host "[INFO] Đang chạy ESLint kiểm tra mã nguồn..." -ForegroundColor Green
            npm run lint
            Write-Host "`nNhấn phím bất kỳ để quay lại menu..." -ForegroundColor Gray
            [Console]::ReadKey($true) | Out-Null
        }
        "5" {
            Show-Header
            Write-Host "[DIAGNOSTIC] Kiểm tra các tiến trình đang chiếm cổng 3000..." -ForegroundColor Cyan
            $connections = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
            if ($connections) {
                foreach ($conn in $connections) {
                    $pidNum = $conn.OwningProcess
                    $proc = Get-Process -Id $pidNum -ErrorAction SilentlyContinue
                    Write-Host " -> Port 3000 bị chiếm bởi PID: $pidNum ($($proc.ProcessName))" -ForegroundColor Yellow
                }
                $kill = Read-Host "Bạn có muốn đóng các tiến trình này không? (y/N)"
                if ($kill -eq "y" -or $kill -eq "Y") {
                    foreach ($conn in $connections) {
                        Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
                    }
                    Write-Host "[SUCCESS] Đã giải phóng cổng 3000." -ForegroundColor Green
                }
            } else {
                Write-Host "[OK] Cổng 3000 hiện đang trống, sẵn sàng hoạt động." -ForegroundColor Green
            }
            Write-Host "`nNhấn phím bất kỳ để quay lại menu..." -ForegroundColor Gray
            [Console]::ReadKey($true) | Out-Null
        }
        "0" {
            Write-Host "`n[INFO] Đang thoát Copilot Manager. Tạm biệt!" -ForegroundColor Yellow
            Start-Sleep -Milliseconds 400
            break
        }
        default {
            Write-Host "`n[ERROR] Lựa chọn không hợp lệ. Vui lòng nhập từ 0 đến 5." -ForegroundColor Red
            Start-Sleep -Seconds 1
        }
    }
} while ($choice -ne "0")
