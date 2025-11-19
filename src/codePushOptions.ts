import CodePush, {
  ReleaseHistoryInterface,
  UpdateCheckRequest,
} from '@bravemobile/react-native-code-push';

async function releaseHistoryFetcher(
  updateRequest: UpdateCheckRequest,
): Promise<ReleaseHistoryInterface> {
  const releaseHistory = {
    '1.0.0': {
      enabled: true,
      mandatory: false,
      downloadUrl: '',
      packageHash: '',
    },
  };
  return releaseHistory;
}

export const codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  releaseHistoryFetcher: releaseHistoryFetcher,
};
