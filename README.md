# 오늘 뭐 먹지? (What to Eat Today?)

저녁 메뉴 추천 서비스입니다.

## SEO 및 보안 최적화 상태

본 프로젝트는 다음과 같은 SEO 및 기술적 최적화가 적용되었습니다:

- **Canonical URL**: 모든 페이지에 `rel="canonical"` 적용.
- **Meta Tags**: Google 및 Naver 최적화 키워드, 설명, OG 태그 적용.
- **Performance**: 렌더링 차단 리소스(JS) 최적화 (`defer` 적용).
- **Custom 404 Page**: 사용자 경험 개선을 위한 `404.html` 구현.
- **Sitemap & Robots.txt**: 검색 엔진 크롤링 최적화.

### 추가 권장 사항 (서버/DNS 설정 필요)

다음 사항은 현재 GitHub Pages 환경에서 직접 설정이 어려우나, 도메인 연결 시 권장됩니다:

1. **SPF Record**: 스팸 방지 및 이메일 보안을 위해 DNS 설정에 SPF 레코드를 추가하세요.
2. **HSTS Header**: 보안 강화를 위해 `Strict-Transport-Security` 헤더 설정을 권장합니다. (GitHub Pages는 기본적으로 HTTPS를 제공합니다.)
3. **URL Redirects**: `www`와 `non-www` 간의 리다이렉션을 설정하여 Canonical URL 이슈를 완전히 해결하세요.
