import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

const REGION_OPTIONS = [
  '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종',
  '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주',
];
const AGE_GROUP_OPTIONS = ['10대', '20대', '30대', '40대', '50대', '60대 이상'];
const REFERRAL_OPTIONS = ['검색으로', 'SNS에서', '지인 소개로', '우연히', '기타'];
const EMOJI_OPTIONS = ['😀', '😍', '🎉', '👍', '🥰', '😂'];

const INITIAL_VALUES = {
  name: '',
  message: '',
  email: '',
  snsHandle: '',
  region: '',
  ageGroup: '',
  referralSource: '',
  emoji: '',
  rating: 0,
};

/**
 * GuestbookForm 컴포넌트
 *
 * Props:
 * @param {function} onSubmit - 폼 제출 시 실행할 함수, 입력값 객체를 인자로 받고 Promise를 반환해야 함 [Required]
 * @param {boolean} isSubmitting - 제출 진행 중 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookForm onSubmit={handleCreateEntry} isSubmitting={isSubmitting} />
 */
function GuestbookForm({ onSubmit, isSubmitting = false }) {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFieldChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleEmojiChange = (event, nextEmoji) => {
    setValues((prev) => ({ ...prev, emoji: nextEmoji ?? '' }));
  };

  const handleRatingChange = (event, nextRating) => {
    setValues((prev) => ({ ...prev, rating: nextRating ?? 0 }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!values.name.trim() || !values.message.trim()) {
      setErrorMessage('이름과 메시지는 꼭 입력해 주세요!');
      return;
    }

    setErrorMessage('');

    try {
      await onSubmit(values);
      setValues(INITIAL_VALUES);
    } catch {
      setErrorMessage('방명록 등록에 실패했어요. 잠시 후 다시 시도해 주세요.');
    }
  };

  return (
    <Card
      component="form"
      onSubmit={handleSubmit}
      elevation={0}
      sx={{
        width: '100%',
        p: { xs: 2.5, md: 3.5 },
        borderRadius: '24px',
        border: '2px solid',
        borderColor: 'primary.light',
        boxShadow: '0 6px 0 0 rgba(106, 90, 205, 0.2)',
        bgcolor: 'background.paper',
      }}
    >
      <Stack spacing={2.5}>
        <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontWeight: 700, color: 'primary.main' }}>
          방명록 남기기 ✍️
        </Typography>

        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            label="이름"
            value={values.name}
            onChange={handleFieldChange('name')}
            required
            fullWidth
            size="small"
          />
          <TextField
            label="이메일 (비공개)"
            type="email"
            value={values.email}
            onChange={handleFieldChange('email')}
            fullWidth
            size="small"
          />
        </Stack>

        <TextField
          label="메시지"
          value={values.message}
          onChange={handleFieldChange('message')}
          required
          fullWidth
          multiline
          minRows={3}
        />

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            label="SNS 계정 (선택)"
            value={values.snsHandle}
            onChange={handleFieldChange('snsHandle')}
            fullWidth
            size="small"
          />
          <TextField
            select
            label="거주 지역 (선택)"
            value={values.region}
            onChange={handleFieldChange('region')}
            fullWidth
            size="small"
          >
            {REGION_OPTIONS.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
          <TextField
            select
            label="나이대 (선택)"
            value={values.ageGroup}
            onChange={handleFieldChange('ageGroup')}
            fullWidth
            size="small"
          >
            {AGE_GROUP_OPTIONS.map((ageGroup) => (
              <MenuItem key={ageGroup} value={ageGroup}>
                {ageGroup}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="알게 된 경로 (선택)"
            value={values.referralSource}
            onChange={handleFieldChange('referralSource')}
            fullWidth
            size="small"
          >
            {REFERRAL_OPTIONS.map((referral) => (
              <MenuItem key={referral} value={referral}>
                {referral}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ sm: 'center' }}>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>기분을 골라주세요</Typography>
            <ToggleButtonGroup
              value={values.emoji || null}
              exclusive
              onChange={handleEmojiChange}
              size="small"
              sx={{ flexWrap: 'wrap' }}
            >
              {EMOJI_OPTIONS.map((emoji) => (
                <ToggleButton
                  key={emoji}
                  value={emoji}
                  sx={{
                    fontSize: '1.2rem',
                    borderRadius: '50% !important',
                    width: 44,
                    height: 44,
                    mr: 0.5,
                    border: '2px solid transparent !important',
                    '&.Mui-selected': {
                      bgcolor: '#FEE500',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  {emoji}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>

          <Stack spacing={1}>
            <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>별점</Typography>
            <Rating value={values.rating} onChange={handleRatingChange} />
          </Stack>
        </Stack>

        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting}
          sx={{
            alignSelf: { xs: 'stretch', md: 'flex-start' },
            borderRadius: '20px',
            px: 4,
            py: 1.2,
            fontWeight: 700,
            boxShadow: '0 4px 0 0 rgba(74, 63, 144, 0.6)',
            transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            '&:hover': {
              transform: 'translateY(-2px)',
            },
          }}
        >
          {isSubmitting ? '등록 중...' : '방명록 남기기'}
        </Button>
      </Stack>
    </Card>
  );
}

export default GuestbookForm;
