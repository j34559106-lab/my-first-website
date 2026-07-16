import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const CARD_COLORS = ['#6A5ACD', '#00BCD4', '#FEE500'];

const formatDate = (isoString) =>
  new Date(isoString).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });

/**
 * GuestbookList 컴포넌트
 *
 * Props:
 * @param {Array} entries - 방명록 항목 배열 [Required]
 * @param {boolean} isLoading - 목록 로딩 중 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookList entries={entries} isLoading={isLoading} />
 */
function GuestbookList({ entries, isLoading = false }) {
  if (isLoading) {
    return (
      <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>방명록을 불러오는 중이에요...</Typography>
    );
  }

  if (entries.length === 0) {
    return (
      <Typography sx={{ color: 'text.secondary', textAlign: 'center' }}>
        아직 방명록이 없어요. 첫 번째 방문자가 되어 주세요!
      </Typography>
    );
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {entries.map((entry, index) => (
        <Card
          key={entry.id}
          elevation={0}
          sx={{
            p: { xs: 2, md: 2.5 },
            borderRadius: '20px',
            borderLeft: '6px solid',
            borderLeftColor: CARD_COLORS[index % CARD_COLORS.length],
            bgcolor: 'background.paper',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.06)',
          }}
        >
          <Stack spacing={1}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={1}>
              <Typography sx={{ fontWeight: 700, color: 'text.primary' }}>
                {entry.emoji ? `${entry.emoji} ` : ''}
                {entry.name}
              </Typography>
              <Typography sx={{ fontSize: '0.8rem', color: 'text.disabled' }}>
                {formatDate(entry.created_at)}
              </Typography>
            </Stack>

            <Typography sx={{ color: 'text.secondary', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
              {entry.message}
            </Typography>

            {entry.rating > 0 && <Rating value={entry.rating} readOnly size="small" />}

            {(entry.region || entry.age_group || entry.referral_source) && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {entry.region && <Chip label={entry.region} size="small" />}
                {entry.age_group && <Chip label={entry.age_group} size="small" />}
                {entry.referral_source && <Chip label={entry.referral_source} size="small" />}
              </Box>
            )}
          </Stack>
        </Card>
      ))}
    </Stack>
  );
}

export default GuestbookList;
